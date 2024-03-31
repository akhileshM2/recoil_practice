import axios from "axios";
import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(networkAtom)
        return allNotifications.network + allNotifications.jobs + allNotifications.messaging + allNotifications.notifications
    }
})