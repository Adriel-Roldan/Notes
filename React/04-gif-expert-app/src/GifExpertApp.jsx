import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball Z']);
    
    const onAddCategory = ( onNewCategory ) => {
        if(categories.includes(onNewCategory)) return;
        setCategories([ onNewCategory, ...categories ])
        // setCategories(cat => [...cat, 'Fortnite'])
    }

  return (
    <>
        <h1>
            GifExpertApp
        </h1>

        <AddCategory onNewCategory={ (value) => onAddCategory(value) } />

        { categories.map( category =>

            <GifGrid 
                key={ category } 
                category={ category }
            />
        )}

    </>
  );
}
