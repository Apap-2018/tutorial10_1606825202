import React from 'react';
import { DaftarAllStafFarmasiRow } from '../components/DaftarAllStafFarmasiRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment';

export class DaftarAllStafFarmasi extends React.Component {
	/** 
	 * TODO: Akses method getAllPasien() pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listAllStafFarmasi: []
		}

		Appointment.getAllStafFarmasi().then(response => {
			this.setState({
				loading: false,
				listAllStafFarmasi: response.result
			})
		})
	}

	render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staf Farmasi" header={['Nama Staf', 'Jenis Staf']}>
                    <DaftarAllStafFarmasiRow listAllStafFarmasi={this.state.listAllStafFarmasi}/>
                </TableContainer>
            )
        }
	}
}