import { WasteCategory } from '../types';

export const wasteCategories: WasteCategory[] = [
  {
    id: 'plastic',
    name: 'Plastic',
    description: 'Clean plastic items that can be recycled',
    points: 10,
    recyclable: true,
    icon: 'bottle',
    examples: ['Water bottles', 'Food containers', 'Clean plastic bags'],
    iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6YP9b0lpSqSeMI1V2vaWbdw6ngjkxbQk0A&s"
  },
  {
    id: 'paper',
    name: 'Paper',
    description: 'Clean paper and cardboard items',
    points: 5,
    recyclable: true,
    icon: 'newspaper',
    examples: ['Newspapers', 'Cardboard boxes', 'Office paper'],
    iconUrl: "https://static.thenounproject.com/png/5378631-200.png"
  },
  {
    id: 'glass',
    name: 'Glass',
    description: 'Glass bottles and containers',
    points: 15,
    recyclable: true,
    icon: 'glass-water',
    examples: ['Glass bottles', 'Jars', 'Glass containers'],
    iconUrl: "https://media.istockphoto.com/id/1370015485/pt/vetorial/broken-glass-fragile-cargo-warning-icon-wine-glass-cracked-packaging-labal-symbol-vector.jpg?s=612x612&w=0&k=20&c=fHKBH0iZSFwDlac9nrGbpjfpsFoIBX-voQ3kw4HoRDY="
  },
  {
    id: 'metal',
    name: 'Metal',
    description: 'Metal items and cans',
    points: 20,
    recyclable: true,
    icon: 'container',
    examples: ['Aluminum cans', 'Steel cans', 'Metal containers'],
    iconUrl: "https://cdn-icons-png.flaticon.com/512/5672/5672233.png"
  },
  {
    id: 'organic',
    name: 'Organic',
    description: 'Food waste and organic materials',
    points: 5,
    recyclable: true,
    icon: 'leaf',
    examples: ['Food scraps', 'Garden waste', 'Coffee grounds'],
    iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXeRoOFeR8qd6LSZaVmVu-emqH9Rph-v4ag&s"
  },
  {
    id: 'hazardous',
    name: 'Hazardous',
    description: 'Dangerous materials requiring special handling',
    points: 0,
    recyclable: false,
    icon: 'alert-triangle',
    examples: ['Batteries', 'Paint', 'Chemicals'],
    iconUrl: "https://media.istockphoto.com/id/1744599190/vector/triangular-biohazard-symbol-biological-hazard-vector.jpg?s=612x612&w=0&k=20&c=9zxd8RoS4zkD6mgUzVajYrbYy1ki6YxDU9boW8htVzQ="
  },
];