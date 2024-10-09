export const mockActivityHistoryItem = {
    id: 'activity123',
    date: new Date('2024-12-01T10:00:00Z').toString(),
    professional: {
      id: 'professional456',
      name: 'Dr. Smith',
      speciality: 
      {
        id: "string", 
        description: "string"
      },
      role: {
        id: "string", 
        description: "string"
      },
    },
    relevant: true,
    diagnostics: [
      {
        id: 'diagnostic789',
        description: 'Diagnóstico primario',
      },
    ],
    center: {
      id: 'center321',
      description: 'Hospital Central',
    },
    up: {
      id: 'up654',
      description: 'Unidad de Emergencias',
    },
    ep: {
      id: 'ep987',
      description: 'Especialidad Pediátrica',
    },
    service: {
      id: 'service543',
      description: 'Servicio de Cardiología',
    },
  };
  