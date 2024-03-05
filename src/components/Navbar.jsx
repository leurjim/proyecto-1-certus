export const Navbar = () => {

    const estilosNav = {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "purple",
        alignItems: "center",
        color: "white",
    }

    return(
        <nav className="nav" style={estilosNav}>
            <figure>
                <img src="https://images.unsplash.com/photo-1584770557404-a5d2a798e81a?q=80&w=847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={100} height={50} alt="Kobe Bryant" />
            </figure>
            <p>Kobe Bryant</p>
        </nav>
    )
}