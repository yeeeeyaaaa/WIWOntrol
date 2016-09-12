/**
 * Created by mireia on 12/09/16.
 */

class DeviceAction {

    addDevice() {
        DeviceDispatcher.handleViewAction({
            actionType:AppConstants.ADD_ITEM,
            item: item
        })
    }
    removeDevice() {

    }
    switchStateDevice() {
        DeviceDispatcher.handleViewAction({
            actionType:AppConstants.SWITCH_ITEM,
            item: item
        })
    }

}
export default DeviceAction;
