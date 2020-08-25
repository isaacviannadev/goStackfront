import React, { useState } from 'react';
import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['Desemvolvimento de app', 'Front-End Web']);

    function handleAddProject() {
        projects.push(`Novo Projeto ${Date.now()}`);

        console.log(projects);
    }

    return (
        <>
            <Header title="homepage" />
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject} >Adicionar Projeto</button>
        </>
    );
}

export default App;