import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

type Props = WithStyles<typeof styles>;

class Cards extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <Card>
          <CardMedia
            image='/static/images/cards/contemplative-reptile.jpg'
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography gutterBottom variant='headline' component='h2'>
              Lizard
            </Typography>
            <Typography component='p'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)<Props>(Cards);
