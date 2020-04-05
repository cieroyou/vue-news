import ListView from '../views/ListView'
import bus from '../utils/bus'
export default function CreateListView(viewName){
    return{
        name: viewName,
        created() {
            bus.$emit('start:spinner')
            this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                console.log(`fetched ${this.$route.name} Data`);
                bus.$emit('end:spinner')
            })
            .catch((error)=> console.log(error));
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}