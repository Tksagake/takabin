import React, { useState } from 'react';
import CollectionRequestForm from '../components/CollectionRequestForm';
import { CollectionRequest } from '../types';
import { Calendar, MapPin, CheckCircle, Clock, Truck } from 'lucide-react';

export default function CollectionRequests() {
  const [requests, setRequests] = useState<CollectionRequest[]>([]);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (request: Omit<CollectionRequest, 'id' | 'status' | 'createdAt'>) => {
    const newRequest: CollectionRequest = {
      ...request,
      id: Date.now().toString(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    setRequests([newRequest, ...requests]);
    setShowForm(false);
  };

  const getStatusIcon = (status: CollectionRequest['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'accepted':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-emerald-500" />;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Collection Requests</h1>
        <p className="text-gray-600">
          Schedule a waste collection or view your existing requests.
        </p>
      </div>

      {showForm ? (
        <div className="bg-white rounded-xl shadow-md p-6">
          <CollectionRequestForm onSubmit={handleSubmit} />
        </div>
      ) : (
        <div className="space-y-4">
          <button
            onClick={() => setShowForm(true)}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            New Collection Request
          </button>

          {requests.map((request) => (
            <div key={request.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(request.status)}
                    <span className="font-medium capitalize">{request.status}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(request.scheduledDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{request.location}</span>
                  </div>
                </div>
              </div>
              {request.notes && (
                <p className="mt-4 text-sm text-gray-600">{request.notes}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}