import { create } from 'zustand';

const useStageStore = create((set) => ({
  // Stage settings
  stageSettings: {
    width: 1000,
    depth: 800,
    sideStage: 200,
    backStage: 200,
  },
  props: [],
  
  // Dancers
  dancers: [],
  
  // Formations
  formations: [],
  currentFormation: 0,
  
  // Music
  music: null,
  
  // Actions
  setStageSettings: (settings) => set({ stageSettings: settings }),
  
  addDancer: (dancer) => set((state) => ({
    dancers: [...state.dancers, { ...dancer, id: Date.now() }],
  })),
  
  removeDancer: (dancerId) => set((state) => ({
    dancers: state.dancers.filter((d) => d.id !== dancerId),
  })),
  
  addFormation: (formation) => set((state) => ({
    formations: [...state.formations, { ...formation, id: Date.now() }],
  })),
  
  updateFormation: (formationId, newPositions) => set((state) => ({
    formations: state.formations.map((f) =>
      f.id === formationId ? { ...f, positions: newPositions } : f
    ),
  })),
  
  setCurrentFormation: (index) => set({ currentFormation: index }),
  
  addProp: (prop) => set((state) => ({
    props: [...state.props, { ...prop, id: Date.now() }],
  })),
  
  removeProp: (propId) => set((state) => ({
    props: state.props.filter((p) => p.id !== propId),
  })),
  
  setMusic: (musicFile) => set({ music: musicFile }),
}));

export default useStageStore;
