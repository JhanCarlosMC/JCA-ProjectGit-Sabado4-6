function ProjectCard({title, description, image, link}){
    return(
        <div class="card-project">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank">Ver proyecto</a>
        </div>
    )
}

export default ProjectCard