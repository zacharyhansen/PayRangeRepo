import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import './Homepage.css';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [
        { "id": "1", "label": "Washer 1", "status": "Available" },
        { "id": "2", "label": "Washer 2", "status": "Available" },
        { "id": "3", "label": "Washer 3", "status": "Available" },
        { "id": "4", "label": "Washer 4", "status": "Busy" }
      ],
      money: 25
    }
    this.addDevice = this.addDevice.bind(this);
    this.removeDevice = this.removeDevice.bind(this);
    this.addMoney = this.addMoney.bind(this);
  }

  addDevice() {
    const currentNumOfDevices = this.state.devices.length;
    let devices = this.state.devices.slice();
    devices.push({ "id": currentNumOfDevices + 1, "label": `Washer ${currentNumOfDevices + 1}`, "status": "Busy" })
    return this.setState({
      devices
    })
  }

  removeDevice(index) {
    let devices = this.state.devices.slice()
    devices.splice(index, 1)
    return this.setState({
      devices
    })
  }

  addMoney() {
    this.setState({
      money: this.state.money + 5
    })
  }

  render() {
    const { devices, money } = this.state
    return (
      <>
        <div id='homepage-page'>
          <Header
            title='Select A Machine'
            button={<button class="round-button" onClick={this.addDevice}>+</button>}
          />
          <div id='homepage-container' className='center'>
            {devices.map((device, index) => (
              <div className='device-card'>
                <button onClick={() => this.removeDevice(index)} className='delete-button'>
                  -
              </button>
                <div className='id'>
                  {device.id}
                </div>
                <div className='label'>
                  {device.label}
                </div>
                <div className='status'>
                  {device.status}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer
          title={`Balance: $${money.toFixed(2)}`}
          button={<button class="round-button" onClick={this.addMoney}>+</button>}
        />
      </>
    )
  }
}

export default Homepage;