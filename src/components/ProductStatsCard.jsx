import { Table } from 'react-bootstrap';
export default function ProductStatsCard({column1, column2, column3, column4 }) {
return (
 
            <div className="table-container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                    <th>{column1}</th>
                    <th>{column2}</th>
                    <th>{column3}</th>
                    <th>{column4}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Product A</td>
                            <td>120</td>
                            <td>$2400</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Product B</td>
                            <td>80</td>
                            <td>$1600</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Product C</td>
                            <td>50</td>
                            <td>$1000</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
);
}
