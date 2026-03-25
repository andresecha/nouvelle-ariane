import {  useNavigate} from 'react-router-dom';
export default function Accueil() {
    const navigate = useNavigate();

    const handleArticleClick = (path) => {
        navigate(path); // Navigate to the specified path
    };
    return (

        <div class="container flex flex-col w-full px-6 py-10 mx-auto lg:inset-x-0">
        <section class="bg-white dark:bg-gray-900" id="accueil"
        Style="height: auto;">
            <div>
            
                <div
                    class="container flex flex-col w-full px-6 mx-auto lg:inset-x-0">
                    <section class=" bg-gray-100/60 border-t border-arianBord shadow-sm p-8 mb-5">
                        <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-start lg:items-center">
                            <div class="sm:col-span-3 lg:col-span-1">
                                <img
                                    alt="logo ariane"
                                    src={process.env.PUBLIC_URL + "logos/ariane.png"}
                                    class="rounded-lg object-cover"
                                />
                            </div>
                            <div class="sm:col-span-3 lg:col-span-2">
                                <blockquote >
                                    <p class="text-xl font-medium text-gray-600 font-jura" >
                                        Le Consortium-HN ARIANE (Analyses, Recherches, Intelligence Artificielle et Nouvelles Editions numériques) a été labellisé par
                                        Huma-Num le 18/01/2023 pour une période de 4 ans.
                                        <br /> <br />
                                    </p>
                                    <span className="cursor-pointer text-blue-500" onClick={() => handleArticleClick('/ariane')}>
                                Lire plus
                            </span>
                                </blockquote>
                            </div>
                        </div>
                    </section>
                    <section class="bg-gray-100/60 border-t border-arianBord shadow-sm p-8">
                        <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-start lg:items-center">
                            <div class="sm:col-span-3 lg:col-span-2">
                                <blockquote>
                                    <p class="text-xl font-medium font-jura text-gray-600">
                                        L’'IR* Huma-Num vise à construire, avec les communautés, et à partir d’un pilotage scientifique,
                                        une infrastructure numérique de niveau international (nœud français des ERIC DARIAH et CLARIN) pour les SHS.
                                        <br /> <br />


                                    </p>
                                    <span className="cursor-pointer text-blue-500" onClick={() => handleArticleClick('/humanum')}>
                                Lire plus
                            </span>

                                </blockquote>
                            </div>
                            <div class="sm:col-span-3 lg:col-span-1">
                                <img
                                    alt="Man"
                                    src={process.env.PUBLIC_URL + "logos/HN.jpg"}
                                    class="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </div>
         
            </div>
        </section>
        </div>
    )
}