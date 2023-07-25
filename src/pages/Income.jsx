
import { useState } from 'react';
import Layout from '../layout/Layout';

const Income = () => {

    let [incomeList , setIncomeList] = useState([]);

    let [item , setItem] = useState("");

   
    const  addToIncomeList = (e) => {
        e.preventDefault();
        console.log(item);
        if (!item) return;
        incomeList.push(item)
        setIncomeList([...incomeList]);
        setItem("")
    }


    return (
        <Layout>
            <h2 className="text-center">Income</h2>
            <form className="add-form" onSubmit={addToIncomeList}>           
                <input 
                    type="text"
                    placeholder="Item..."
                    value={item}
                    onChange={(e)=> setItem(e.target.value)}
                />
                <button className="btn btn-success">Add Income</button>
            </form>
            <hr />
            <table>
                <tbody>
                    {
                        incomeList.length !==0?(
                            incomeList.map((element , i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i+1}.</td>
                                        <td>{element}</td>
                                        <td>Taka</td>
                                    </tr>
                                )
                            })
                        ):(<tr className="text-center">No Data Found</tr>)
                    }
                </tbody>
            </table>
        </Layout>
    );
};

export default Income;