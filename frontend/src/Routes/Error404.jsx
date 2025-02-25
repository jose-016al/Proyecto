import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error404 = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="sol-sm-12 col-sm-offset-1 text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center">404</h1>
                            </div>
                            <div className="contant_box_404">
                                <h3 className="h2">Parece que estás perdido</h3>
                                <p>¡La página que estás buscando no está disponible!</p>
                                <Link className="link_404" to={`/`}>Volver a Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Error404;