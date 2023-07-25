import { Link } from "react-router-dom";


const Layout = (props) => {
    return (
        <div className="container">
            <ul className="listDisplay">
                <li  className="list">
                    <Link to={'/'}>Home</Link>
                </li>
                <li  className="list">
                    <Link to={'/income'}>Income</Link>
                </li>
                <li  className="list">
                    <Link to={'/expense'}>Expense</Link>
                </li>
            </ul>

            {props.children}

        </div>
    );
};

export default Layout;