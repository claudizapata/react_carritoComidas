

export default function Footer(){
        return(
            <>
            <footer>
                <section style={{backgroundColor: "#d1d4d6ff", width:"100%", fontSize: ".8rem" }}>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <div>
                        <h3>Contacto</h3>
                        <p>Whatsapp: 11223456789</p>
                        <p>Av del Libertador 4321 - Palermo- CABA</p>
                    </div>
                    <div>
                        <h3>Seguinos en:</h3>
                        <div style={{display: "flex", justifyContent: "space-around"}}>
                            <img src="img/icons8-instagram-48.png" alt="Instagram" width="30%" height="30%"/>
                            <img src="img/icons8-facebook-48.png" alt="Facebook" width="30%" height="30%"/>
                            <img src="img/icons8-tiktok-48.png" alt="Tiktok" width="30%" height="30%"/>
                        </div>
                    </div>
                </div>
                </section>
            </footer>
            </>
        );
};