// var HID = require('node-hid');
// var devices = HID.devices();
// console.log(devices)
// const d = devices[0]
// var device = new HID.HID(d.vendorId, d.productId);

// device.on ('data', console.log)

// // var hid = require('hid')

// // // List all HID devices
// // const d = hid.enumerate(0, 0)[0]
// // const device = hid.open(d.vendor_id, d.product_id, [d.serial_number])
// console.log(device);
// var dbus = require("dbus-native");
// var sBus = dbus.systemBus();
 
// var systemBus = dbus.systemBus();
// var btService = systemBus.getService("org.bluez");
 
// // btService.getInterface("/org/bluez/hci0","org.bluez.Adapter1",function(err,Intf){
// //   Intf.StartDiscovery();
// //   Intf.on("InterfacesAdded",console.log)
// // });

const bluetooth = require('node-bluetooth');

// create bluetooth device instance

const device = new bluetooth.DeviceINQ();

device
    .on('finished', console.log.bind(console, 'finished'))
    .on('found', function found(address, name) {
        console.log('Found: ' + address + ' with name ' + name);

        device.findSerialPortChannel(address, function(channel) {
            console.log('Found RFCOMM channel for serial port on %s: ', name, channel);

            // make bluetooth connect to remote device
            bluetooth.connect(address, channel, function(err, connection) {
                if (err) return console.error(err);
                connection.write(new Buffer('Hello!', 'utf-8'));
            });

        });

        // make bluetooth connect to remote device
        bluetooth.connect(address, channel, function(err, connection) {
            if (err) return console.error(err);

            connection.on('data', (buffer) => {
                console.log('received message:', buffer.toString());
            });

            connection.write(new Buffer('Hello!', 'utf-8'));
        });
    }).inquire();
 
console.log("Server started");