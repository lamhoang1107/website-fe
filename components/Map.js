import { useContext } from 'react';
import { GlobalDataContext } from '@/context/GlobalDataContext';


export default function Map() {
    const { globalData } = useContext(GlobalDataContext);
    let _data = globalData.component?.maps ?? {}

    const match = _data?.google_map_link.match(/<iframe[^>]+src=["']([^"']+)["']/);
    let url =  match ? match[1] : null;


    return (
        <>
            {
                url && (<div className="container-fluid map py-5">
                        <div class="rounded">
                            <iframe className="rounded w-100" style={{ height: "500px" }}
                                src={url}
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                </div>)
            }
        </>
    )
}
