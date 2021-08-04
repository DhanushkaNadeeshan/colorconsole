import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider, useQuery, useMutation } from 'react-query'
import axios from 'axios';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'




const queryClient = new QueryClient()

async function callData({ queryKey }) {

    const [key, id] = queryKey

    const result = await axios.get(`/api/item?id=${id}`);
   
    return result
}

function Data() {


    const route = useRouter();
    const id = route.query.id;

    const { isLoading, error, data } = useQuery(['info', id], callData)

    if (isLoading) return 'Loading...'

    return (

        < div className={styles.infoContainer}>
            <div>
                {data && (<>
                    <img className={styles.center} src={`../../pokemon/${data.data.name.english.toLowerCase().replace(" ", "-")}.jpg`} />
                    <p>Name :<b>{data.data.name.english} </b></p>
                    <p>Type : {data.data.type.join(",")}</p>
                    <p>{JSON.stringify(data.data.base)}</p>
                </>)}

                <Link href={`/`}>
                    <button >Home</button>
                </Link>
            </div>
        </div>

    )

}

function info() {


    return (
        <QueryClientProvider client={queryClient}>
            <Data />
        </QueryClientProvider>

    )
}


export default info;