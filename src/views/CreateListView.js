import ListView from '../views/ListView'

export default function CreateListView(viewName){
    return{
        name: viewName,
        render(createElement) {
            return createElement(ListView);
        }

    }
}