// src/services/firebase/utils.ts
import { db } from "./config"
import {
	enableNetwork,
	disableNetwork,
	waitForPendingWrites,
} from "firebase/firestore"

export const firebaseUtils = {
	/**
	 * Attempts to reconnect to Firestore with backoff
	 */
	async reconnect(maxAttempts = 3) {
		for (let attempt = 1; attempt <= maxAttempts; attempt++) {
			try {
				// Disable network to reset connections
				await disableNetwork(db)
				// Wait a bit before enabling
				await new Promise((resolve) => setTimeout(resolve, attempt * 1000))
				// Enable network again
				await enableNetwork(db)
				// Wait for any pending writes
				await waitForPendingWrites(db)
				return true
			} catch (error) {
				console.warn(`Reconnection attempt ${attempt} failed:`, error)
				if (attempt === maxAttempts) {
					throw error
				}
			}
		}
		return false
	},

	/**
	 * Ensures all pending writes are completed
	 */
	async waitForSync() {
		try {
			await waitForPendingWrites(db)
		} catch (error) {
			console.warn("Error waiting for sync:", error)
			throw error
		}
	},
}
