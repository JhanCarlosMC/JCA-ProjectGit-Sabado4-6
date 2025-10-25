import ProjectCard from './ProjectCard'
import './styles/Projects.css'
import imgP1 from '../assets/img-paginaweb.png'
import imgP2 from '../assets/img-android.png'
import imgP3 from '../assets/img-mde.png'

function Projects(){
    return(
    <section id="section-projects" class="section-container">
            <div class="container">
                <h2>Proyectos</h2>
                <div id="container-projects">

                    <ProjectCard 
                        title="Portafolio Web"
                        description="Página web con HTML, CSS y JS, que muestra un portafolio virtual."
                        image={imgP1}
                        link="https://github.com/JhanCarlosMC/JCA-ProjectGit-Sabado4-6"
                    />

                    <ProjectCard 
                        title="Aplicación Android"
                        description="Aplicación Android con Java, que permite a los usuarios interactuar con una API."
                        image={imgP2}
                        link="https://github.com/JhanCarlosMC/JCA-ProjectGit-Sabado4-6"
                    />

                    <ProjectCard 
                        title="Aplicación MDE"
                        description="Aplicación MDE con Java, que permite a los usuarios interactuar con una API."
                        image={imgP3}
                        link="https://github.com/JhanCarlosMC/JCA-ProjectGit-Sabado4-6"
                    />

                    <ProjectCard 
                        title="Aplicación MDE"
                        description="Aplicación MDE con Java, que permite a los usuarios interactuar con una API."
                        image={imgP3}
                        link="https://github.com/JhanCarlosMC/JCA-ProjectGit-Sabado4-6"
                    />

                </div>
            </div>
        </section>
    )
}
export default Projects