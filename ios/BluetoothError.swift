//
//  BluetoothError.swift
//  rn-bluetooth-classic
//
//  Created by  on 2020-11-09.
//

import Foundation

enum BluetoothError : Error {
    case BLUETOOTH_DISABLED
    case DEVICE_ALREADY_CONNECTED
    case CONNECTION_FAILED
    
    var info: (domain: String, code: Int, abbr: String, message: String) {
        switch self {
        case .BLUETOOTH_DISABLED:
            return ("sita.im.bluetooth", 1, "bluetooth_disabled", "Bluetooth is not enabled")
        case .DEVICE_ALREADY_CONNECTED:
            return("sita.im.bluetooth", 100, "device_already_connected", "Device is already connected")
        case .CONNECTION_FAILED:
            return("sita.im.bluetooth", 200, "connection_failed", "Could not connect to EAAccessory")
        }
    }
    
    var error: NSError {
        return NSError(domain: self.info.domain,
                       code: self.info.code,
                       userInfo: ["error": self.info.message])
    }
}
