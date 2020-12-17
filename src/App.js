<<<<<<< HEAD
import React, { useState } from 'react';

import './App.css';
import casal from './assets/casal.jpg';
=======
import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
>>>>>>> 2588fd0820b4ae58d590a75dc6a3863de2a99f59

import Header from './components/Header';

function App() {
<<<<<<< HEAD
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-End Web']);

    function handleAddProject() {
        // projects.push(`Novo Projeto ${Date.now()}`);

        setProjects([...projects,`Novo Projeto ${Date.now()}`]);
=======
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
       api.get('/projects').then(response => {
        setProjects(response.data);
       }); 
    }, []);

    async function handleAddProject() {
        // setProjects([...projects, `Novo Projeto ${Date.now()}`]);
     const response = await api.post('/projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: 'Isaac Vianna'
        });

        const project = response.data;
>>>>>>> 2588fd0820b4ae58d590a75dc6a3863de2a99f59

        setProjects([...projects, project]);
    }

    return (
        <>
            
            <Header title="homepage" />
            
            <img width={400} src={casal} />

            

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}> Adicionar Projeto </button>
        </>
    );
}

export default App;