import './session-table.css';

function SessionTable(props) {
    return (
        <div>
            <table className="tickets-table" width="100%" cellPadding="10" align="center">
                <thead className='sticky-head'>
                    <tr>
                        <th>Время</th>
                        <th>Кинотеатр</th>
                        <th>Взрослый</th>
                        <th>Детский</th>
                        <th>Студенческий</th>
                        <th>VIP</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.movieSession.map((item, idx) => (
                        <tr key={idx}>
                            <td><span className='border'>{item.time}</span></td>
                            <td>{item.cinema}</td>
                            <td>{item.adult}</td>
                            <td>{item.kids}</td>
                            <td>{item.student}</td>
                            <td>{item.vip}</td>
                            <td><button className="btn-custom">Купить билет</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default SessionTable;