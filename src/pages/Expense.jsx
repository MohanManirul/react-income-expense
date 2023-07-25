import { useState } from 'react';
import Layout from '../layout/Layout';


const Expense = () => {
    let [expenseList , setExpenseList] = useState([]);

    let [item , setItem] = useState("");

   
    const  addToExpenseList = (e) => {
        e.preventDefault();
        console.log(item);
        if (!item) return;
        expenseList.push(item)
        setExpenseList([...expenseList]);
        setItem("")
    }


    return (
        <Layout>
            <h2 className="text-center">Expense</h2>
            <form className="add-form" onSubmit={addToExpenseList}>           
                <input 
                    type="text"
                    placeholder="Item..."
                    value={item}
                    onChange={(e)=> setItem(e.target.value)}
                />
                <button className="btn btn-success">Add Expense</button>
            </form>
            <hr />
            <table>
                <tbody>
                    {
                        expenseList.length !==0?(
                            expenseList.map((element , i) => {
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

export default Expense;