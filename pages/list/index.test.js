import { getCategoryIDs,getCategoryData } from '../lib/api';
import { paginate } from '../../components/pagination/helpers/paginate'
import "isomorphic-fetch"

describe('List component', () => {
    it('should render correctly', () => {
        const products = [
            {
                pk: 1,
                name: 'Product 1'
            },
            {
                pk: 2,
                name: 'Product 2'
            }
        ];
        const facets = {
            name: 'Facet 1'
        };
        const currentPage = 1;
        const pageSize = 20;

        const paginatedPosts = paginate(products, currentPage, pageSize);

        expect(paginatedPosts).toEqual([
            {
                pk: 1,
                name: 'Product 1'
            },
            {
                pk: 2,
                name: 'Product 2'
            }
        ]);
    });
});

describe('getStaticPaths', () => {
    it('should return paths and fallback false', async () => {
        const paths = await getCategoryIDs();
        expect(paths).toBeTruthy();
        expect(paths.fallback).toBeFalsy();
    });
});

describe('getStaticProps', () => {
    it('should return props with products and facets', async () => {
        const id = 1;
        let products, facets;
        await getCategoryData(id).then(response => {
            products = response.products;
            facets = response.facets;
        });
        expect(products).toBeTruthy();
        expect(facets).toBeTruthy();
    });
});