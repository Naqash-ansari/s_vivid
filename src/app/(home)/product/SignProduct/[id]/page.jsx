'use client';

import { useParams } from 'next/navigation';
// import ShopSign from '../../ProductCategories/shopsigns/ShopSign';
import ShopSign from '../../SignProduct/ProductCategories/shopsigns/ShopSign';
import MainDesign from '../ProductCategories/ThreedDesign/MainDesign';
import MainNeon from '../ProductCategories/neon/MainNeon';
import ProjectionSignProduct from '../ProductCategories/ProjectionSigns/ProjectionSigns';

const componentMap = {
    1: ShopSign,
    2: MainDesign,
    3: MainNeon,
    4: ProjectionSignProduct
};

const ProductPage = () => {
    const params = useParams();
    const id = parseInt(params.id);

    const SelectedComponent = componentMap[id];

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {SelectedComponent ? (
                <SelectedComponent />
            ) : (
                <p>Component not found for ID: {id}</p>
            )}
        </div>
    );
};

export default ProductPage;
