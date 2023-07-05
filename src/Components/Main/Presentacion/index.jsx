import React from "react";
import styled from "styled-components";
import foto from "../../../assest/cuatro.jpg";
import foto2 from "../../../assest/siete.jpg";
import foto3 from "../../../assest/tres.jpg";
import foto4 from "../../../assest/14.jpg";

const BoxCuerpo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3.5rem;
    width: 80%;
    background-color: #ffffff;

    @media (max-width: 800px) {
        margin-top:1rem;
        width: 100%;
    }
`

const TituloPortada = styled.h1`
    display: none;
    flex-direction: column;
    color: #464646;
    font-size: 40px;
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media (max-width: 800px) {
        display: flex;
        width: 90%;
        font-size: 3.5rem;
        color: #464646;
        z-index: 100;
        margin-top: 1.5rem;
    }
`

const DivContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8rem;
    gap: 5rem;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        margin-top:1rem;
        padding-bottom: 3.5rem;
        gap: 1.5rem;
    }
`

const DivContent2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8rem;
    gap: 5rem;
    @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 3.5rem;
    gap: 1.5rem;
    }
`

const DivText = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 4px solid #D6D582;
    width: 20%;

    @media (max-width: 800px) {
        text-align: center;
        align-items: center;
        border-top: none;
        width: 100%;
    }
`

const DivText2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-top: 4px solid #D6D582;
    width: 20%;

    @media (max-width: 800px) {
        align-items: center;
        border-top: none;
        order: 1;
        width: 100%;
    }
`

const Titu = styled.h1`
    display: flex;
    width: 36rem;
    flex-direction: column;
    color: #464646;
    font-size: 2.125rem;
    font-weight: 400;
    font-family: Manrope;
    line-height: 2.625rem;
    letter-spacing: 2px;

    @media (max-width: 800px) {
        border-top: 4px solid #D6D582;
        padding-top: 1.5rem;
        letter-spacing: 0.5px;
        width: 90%;
        font-size: 1.4rem;
        color: #D6D582;
        font-weight: 600;
        text-align: center;
    }
`

const Titu2 = styled.h1`
    display: flex;
    width: 36rem;
    flex-direction: column;
    text-align: end;
    color: #464646;
    font-size: 2.125rem;
    font-weight: 400;
    font-family: Manrope;
    line-height: 2.625rem;
    letter-spacing: 2px;

    @media (max-width: 800px) {
        border-top: 4px solid #D6D582;
        padding-top: 1.5rem;
        letter-spacing: 0.5px;
        width: 90%;
        font-size: 1.4rem;
        color: #D6D582;
        font-weight: 600;
        text-align: center;
    }
`  

const Parra = styled.p`
    display: flex;
    width: 36rem;
    flex-direction: column;
    margin: 0;
    color: #464646;
    font-size: 1.2rem;
    font-family: Manrope;
    line-height: 1.8rem;
    letter-spacing: 0.9px;

    @media (max-width: 800px) {
        width: 90%;
        font-size: 1.1rem;
        letter-spacing: 0;
        text-align: center;
    }
`

const Parra2 = styled.p`
    display: flex;
    width: 36rem;
    flex-direction: column;
    text-align: end;
    margin: 0;
    color: #464646;
    font-size: 1.2rem;
    font-family: Manrope;
    line-height: 1.8rem;
    letter-spacing: 0.9px;

    @media (max-width: 800px) {
        width: 90%;
        font-size: 1.1rem;
        letter-spacing: 0;
        text-align: center;
    }
`

const Gif = styled.img`
    width: 26rem;
    height: 26rem;
    border-radius: 50%;
    margin: 0;
    opacity: 80%;
    box-shadow: 0px 8px 8px 1px rgba(0, 0, 0, 0.5);

    @media (max-width: 800px) {
        display: none;
    }
`

const Gif2 = styled.img`
    width: 26.34rem;
    height: 26.34rem;
    border-radius: 50%;
    margin: 0;
    opacity: 80%;
    box-shadow: 0px 8px 8px 1px rgba(0, 0, 0, 0.5);

    @media (max-width: 800px) {
        display: none;
    }
`

const GifM = styled.img`
    display: none;

    @media (max-width: 800px) {
        display: flex;
        width: 100%;
        height: auto;
        opacity: 80%;
        margin: 1rem 0 1.5rem 0;
    }
`


const STRONG = styled.h1`
    color: #464646;
    font-weight: 600;
    font-size: 36px;
    margin: 0;

    @media (max-width: 800px) {
        font-size: 1.6rem;
        text-align: flex-start;
    }
`

const Presentacion = () => {
    return (
        <BoxCuerpo>
                <TituloPortada>CONOCER PARA CONSERVAR</TituloPortada>
            <DivContent>
                <DivText>
                    <Titu>GRANJA LOS PIBES: CONTRIBUYENDO A LA CONCIENCIACIÓN SOBRE EL <STRONG>CUIDADO Y LA PRESERVACIÓN</STRONG> DE LA FLORA Y FAUNA SILVESTRE.</Titu>
                    <GifM src={foto}/>
                    <Parra> 
                    El centro de rescate Granja Los Pibes, ha asumido la importante tarea de concientizar a la comunidad sobre los cuidados y conservación de la flora y fauna de nuestra region. A través de su incansable labor, el centro busca preservar la riqueza y la biodiversidad que nos rodea.
                    Su enfoque principal radica en la conservación de la flora y fauna autóctonas, consideradas tesoros vivos de nuestra región.
                    </Parra>
                </DivText>
                <Gif src={foto}/>
            </DivContent>
            <DivContent2>
                <Gif2 src={foto2}/>
                <DivText2>
                    <Titu2>APOYO INTEGRAL A LA CONSERVACIÓN DE LA VIDA SILVESTRE: <STRONG>RESCATES, ESTUDIOS Y LIBERACIONES.</STRONG></Titu2>
                    <GifM src={foto2}/>
                    <Parra2> 
                    En un esfuerzo por preservar la vida silvestre y su hábitat natural, nuestro equipo se dedica a brindar un apoyo integral tanto a la comunidad local como a nivel provincial. A través de acciones de rescate, estudios veterinarios y liberaciones oportunas, trabajamos incansablemente para asegurar el bienestar y la supervivencia de los animales silvestres.
                    </Parra2>
                </DivText2>
            </DivContent2>
            <DivContent>
                <DivText>
                    <Titu><STRONG>MASCOTISMO, EXPANSIÓN URBANA-AGRÍCOLA Y TRÁFICO ILEGAL:</STRONG> PRINCIPALES AMENAZAS CONTRA LA BIODIVERSIDAD.</Titu>
                    <GifM src={foto3}/>
                    <Parra>
                    El mascotismo, la expansión de la frontera urbana-agrícola y el tráfico ilegal de animales representan los principales focos de conflicto que amenazan nuestra valiosa flora y fauna. En respuesta a estos desafíos, consideramos de vital importancia concientizar y unir esfuerzos para proteger y preservar nuestro hábitat natural. 
                    </Parra>
                </DivText>
                <Gif src={foto3}/>
            </DivContent>
            <DivContent2>
                <Gif2 src={foto4}/>
                <DivText2>
                    <Titu2><STRONG>CUIDANDO DEL PLANETA Y DE LOS NIÑOS:</STRONG> CENTRO DE RESCATE QUE COMBINA CONSERVACIÓN AMBIENTAL Y AYUDA SOCIAL.</Titu2>
                    <GifM src={foto4}/>
                    <Parra2>
                    El centro de rescate desempeña un papel esencial al funcionar como un centro de día para niños y niñas en situaciones de vulnerabilidad. Se busca brindar un apoyo integral a través de actividades educativas, talleres, charlas y servicios de comedor. Además, se compromete en facilitar el acceso a los centros educativos correspondientes. De esta manera, se convierte en un punto de encuentro para el crecimiento y desarrollo de los niños y niñas, proporcionándoles oportunidades educativas para un futuro mejor. 
                    </Parra2>
                </DivText2>
            </DivContent2>
        </BoxCuerpo>
    )
}

export default Presentacion