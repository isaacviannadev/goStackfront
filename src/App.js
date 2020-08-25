import React, { useState } from 'react';

import './App.css';
import casal from './assets/casal.jpg';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-End Web']);

    function handleAddProject() {
        // projects.push(`Novo Projeto ${Date.now()}`);

        setProjects([...projects,`Novo Projeto ${Date.now()}`]);

        console.log(projects);
    }

    return (
        <>
            
            <Header title="homepage" />
            
            <img width={400} src={casal} />

            

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject} >Adicionar Projeto</button>
        </>
    );
}

export default App;