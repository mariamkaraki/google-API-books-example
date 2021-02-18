import React , { FC } from "react";
import Book from "../../type/bookType";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%'
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



interface BookListProps {
  searchInputVal: string;
  Books : Book[];
}
  

const Booklist: FC<BookListProps> =  (props: BookListProps): JSX.Element => {
  const classes = useStyles();
  return (
            
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div"  style={{ display: props.searchInputVal !== undefined ? "block" : "none" }}> Search for: {props.searchInputVal}</ListSubheader>
        </GridListTile>
        {props.Books.map((book : Book, index : number) => (
          
          <GridListTile key={index} >
            <img src={book.imageLinks} alt={book.title} />
            <GridListTileBar
              title={book.title}
              subtitle={<span>by: {book.authors}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${book.title}`} onClick={() => {  window.open(book.link , "_blank")}} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>

        ))}
      </GridList>
    </div>
            
              
              
  );
};


export default Booklist;