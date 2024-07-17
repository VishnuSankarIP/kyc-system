const ChiefReducer = (state, action) => {
    let updatedUserData; // Declare the variable outside the switch statement
    switch (action.type) {
        case "UPDATE_USER_DATA":
            updatedUserData = { ...state.user_data, ...action.user_data }; // Assign value here
            localStorage.setItem("user_data", JSON.stringify(updatedUserData));
            return {
                ...state,
                user_data: updatedUserData,
            };

        default:
            return state;
    }
};

export default ChiefReducer;