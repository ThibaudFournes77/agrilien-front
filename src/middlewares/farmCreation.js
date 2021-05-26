import { FARM_CREATION } from 'src/actions/farms';

const farmCreation = (store) => (next) => (action) => {
  switch (action.type) {
    case FARM_CREATION: {
      const newFarm = store.getState().farms.creation;
      // We get the full list of secondary productions and otherInfos from the state
      const secondaryProductionsList = store.getState().secondaryProductions.list;
      const otherInfosList = store.getState().otherInfos.list;

      // we want to make arrays with the ids of the secondary productions
      // and other infos which are in the state
      const secondaryProductionsId = [];
      const otherInfosId = [];
      newFarm.secondaryProductions.forEach((prod) => {
        secondaryProductionsList.forEach((elem) => {
          if (prod === elem.label) {
            secondaryProductionsId.push(elem.id);
          }
        });
      });
      newFarm.otherInfos.forEach((otherInfo) => {
        otherInfosList.forEach((elem) => {
          if (otherInfo === elem.label) {
            otherInfosId.push(elem.id);
          }
        });
      });

      // we replace the arrays of labels with the arrays of ids
      newFarm.secondaryProductions = secondaryProductionsId;
      newFarm.otherInfos = otherInfosId;
      console.log(newFarm);
      break;
    }
    default:
      next(action);
  }
};

export default farmCreation;
