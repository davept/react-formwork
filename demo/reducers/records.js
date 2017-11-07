
const getDefaults = () => ({
   animal: {

   },
   vegetable: {

   },
   mineral: {

   }
});

const records = (state = getDefaults(), action) => {
    switch (action.type) {
        case 'X':
            return state;
        default:
            return state;
    }
};

export default records;
