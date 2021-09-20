import { List } from '@chakra-ui/react';
import { CategoriesItem } from './CategoriesItem';

interface Category {
  title: string;
  icon: string;
}

interface CategoriesListProps {
  categories: Category[];
}

export function CategoriesList({ categories }: CategoriesListProps) {
  return (
    <List
      maxW={[325, 'unset']}
      width="100%"
      display="flex"
      justifyContent={['center', 'center', 'space-between']}
      flexWrap="wrap"
      mt={['-7', '-9']}
      ml={['-7', '-9']}
    >
      {categories.map(({ title, icon }) => (
        <CategoriesItem key={title} title={title} icon={icon} />
      ))}
      ;
    </List>
  );
}
