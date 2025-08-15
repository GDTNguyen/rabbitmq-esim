import axios from "axios";

// Run staging crons
const activatePlansStaging = async () => {
	try {
		const response = await axios.get(
			`https://esim-network-git-staging-gdtnguyens-projects.vercel.app/api/exposed-crons/esims/activate-plans`
		);
		console.log("Staging Response:", response.data);
	} catch (error) {
		console.error("Error in activate plans staging:", error);
	}
};

// Run production crons
const activatePlansProd = async () => {
	try {
		console.log(`Running cron job activatePlansProd `);
		const response = await axios.get(
			`https://e-sim.network/api/exposed-crons/esims/activate-plans`
		);
		console.log("Production Response:", response.data);
	} catch (error) {
		console.error("Error in activate plans production:", error);
	}
};

// Example execution
// activatePlansStaging();
activatePlansProd();

// Run staging crons
const checkUsageStaging = async () => {
	try {
		const response = await axios.get(
			`https://esim-network-git-staging-gdtnguyens-projects.vercel.app/api/exposed-crons/esims/check-usage`
		);
		console.log("Staging Response:", response.data);
	} catch (error) {
		console.error("Error in activate plans staging:", error);
	}
};

// Run production crons
const checkUsageProd = async () => {
	try {
		console.log(`Running cron job checkUsageProd `);

		const response = await axios.get(
			`https://e-sim.network/api/exposed-crons/esims/check-usage`
		);
		console.log("Production Response:", response.data);
	} catch (error) {
		console.error("Error in activate plans production:", error);
	}
};

// Example execution
// checkUsageStaging();
checkUsageProd();
