import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import useStageStore from '../store/stageStore';

const ControlPanel = () => {
  const { 
    stageSettings, 
    setStageSettings,
    addDancer,
    addProp,
    formations,
    currentFormation,
    setCurrentFormation
  } = useStageStore();

  const handleAddDancer = () => {
    addDancer({
      name: `Dancer ${Date.now()}`,
      color: '#ff0000',
      x: 0,
      y: 0,
    });
  };

  const handleAddProp = () => {
    addProp({
      name: 'New Prop',
      width: 100,
      height: 100,
      depth: 100,
      color: '#666666',
      x: 0,
      y: 0,
    });
  };

  return (
    <Box className="p-4 bg-white shadow-lg">
      <Typography variant="h6" className="mb-4">Stage Settings</Typography>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <TextField
          label="Width"
          type="number"
          value={stageSettings.width}
          onChange={(e) => setStageSettings({
            ...stageSettings,
            width: Number(e.target.value)
          })}
        />
        <TextField
          label="Depth"
          type="number"
          value={stageSettings.depth}
          onChange={(e) => setStageSettings({
            ...stageSettings,
            depth: Number(e.target.value)
          })}
        />
      </div>

      <div className="flex gap-4 mb-4">
        <Button 
          variant="contained" 
          onClick={handleAddDancer}
          className="flex-1"
        >
          Add Dancer
        </Button>
        <Button 
          variant="contained" 
          onClick={handleAddProp}
          className="flex-1"
        >
          Add Prop
        </Button>
      </div>

      <Typography variant="h6" className="mb-2">Formations</Typography>
      <div className="flex gap-2">
        {formations.map((formation, index) => (
          <Button
            key={formation.id}
            variant={currentFormation === index ? "contained" : "outlined"}
            onClick={() => setCurrentFormation(index)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </Box>
  );
};

export default ControlPanel;
