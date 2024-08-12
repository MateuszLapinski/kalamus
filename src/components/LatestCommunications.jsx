import { Table } from 'react-bootstrap';

export default function LatestCommunications() {
    return (
        <div className="latest-communications">
            <h3>Latest Communications</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Last author</th>
                        <th>Type</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Elevator doors 3rd floor</td>
                        <td>Jessica Hanson</td>
                        <td>Risk</td>
                        <td>04 Mar 2019</td>
                    </tr>
                    <tr>
                        <td>Concrete for balconies</td>
                        <td>Sebastian Hendricks</td>
                        <td>Proposal</td>
                        <td>12 Sept 2019</td>
                    </tr>
                    <tr>
                        <td>Emergency exit doors on the front</td>
                        <td>Howard Hensley</td>
                        <td>Variation</td>
                        <td>12 Sept 2019</td>
                    </tr>
                    <tr>
                        <td>Windows installation</td>
                        <td>Jessica Hanson</td>
                        <td>Risk</td>
                        <td>04 Oct 2019</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
