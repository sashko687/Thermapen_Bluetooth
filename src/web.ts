import { WebPlugin } from '@capacitor/core';
import type {
  TimeoutOptions,
  BleDevice,
  BleServices,
  ThermapenBluetoothPlugin,
  BooleanResult,
  DeviceIdOptions,
  GetConnectedDevicesOptions,
  GetDevicesOptions,
  GetDevicesResult,
  ReadDescriptorOptions,
  ReadOptions,
  ReadResult,
  ReadRssiResult,
  RequestBleDeviceOptions,
  WriteOptions,
  WriteDescriptorOptions,
} from './definitions';

export class ThermapenBluetoothWeb extends WebPlugin implements ThermapenBluetoothPlugin {
  constructor() {
    super({
      name: 'ThermapenBluetooth',
      platforms: ['web', 'ios', 'android'],
    });
  }

  async initialize(): Promise<void> {
    // not avialable
  }

  async isEnabled(): Promise<BooleanResult> {
    // not available on web
    return Promise.reject('not available on web')
  }

  async startEnabledNotifications(): Promise<void> {
    // not available on web
  }

  async stopEnabledNotifications(): Promise<void> {
    // not available on web
  }

  async openAppSettings(): Promise<void> {
    // not available on web
  }

  async setDisplayStrings(): Promise<void> {
    // not available on web
  }

  async requestDevice(options?: RequestBleDeviceOptions): Promise<BleDevice> {
    // not available on web
    await Promise.resolve(options);
    return Promise.resolve({deviceId: ''});
  }

  async requestLEScan(options?: RequestBleDeviceOptions): Promise<void> {
    await Promise.resolve(options);
    // not available on web
  }

  // private onAdvertisementReceivedCallback = this.onAdvertisementReceived.bind(this);

  // private onAdvertisementReceived(event: any): void {
  //   // not available on web
  // }

  async stopLEScan(): Promise<void> {
      // not available on web
  }

  async getDevices(_options: GetDevicesOptions): Promise<GetDevicesResult> {
    // not available on web
    await Promise.resolve(_options);
    return Promise.reject('not available on web');
  }

  async getConnectedDevices(_options: GetConnectedDevicesOptions): Promise<GetDevicesResult> {
    // not available on web
    await Promise.resolve(_options);
    return Promise.reject('not available on web');
  }

  async connect(options: DeviceIdOptions & TimeoutOptions): Promise<void> {
    await Promise.resolve(options);
    // not avialable on web
  }

  async disconnect(options: DeviceIdOptions): Promise<void> {
    await Promise.resolve(options);
    // not avialable
  }

  async getServices(options: DeviceIdOptions): Promise<BleServices> {
    await Promise.resolve(options);
    return Promise.reject('not available on web');
  }

  async readRssi(_options: DeviceIdOptions): Promise<ReadRssiResult> {
    return Promise.reject('not available on web');
  }

  async read(options: ReadOptions): Promise<ReadResult> {
    await Promise.resolve(options);
    return Promise.reject('not available on web');
  }

  async write(options: WriteOptions): Promise<void> {
    await Promise.resolve(options);
    return Promise.reject('not available on web');
  }

  async writeWithoutResponse(options: WriteOptions): Promise<void> {
    await Promise.resolve(options);
    // not avialable
  }

  async readDescriptor(options: ReadDescriptorOptions): Promise<ReadResult> {
    await Promise.resolve(options);
    return Promise.reject('not available on web');
  }

  async writeDescriptor(options: WriteDescriptorOptions): Promise<void> {
    await Promise.resolve(options);
    return Promise.reject('not available on web');
  }

  async startNotifications(options: ReadOptions): Promise<void> {
    await Promise.resolve(options);
    // not avialable
  }

  async stopNotifications(options: ReadOptions): Promise<void> {
    await Promise.resolve(options);
    // not avialable
  }
}

const ThermapenBluetooth = new ThermapenBluetoothWeb();

export { ThermapenBluetooth };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ThermapenBluetooth);
