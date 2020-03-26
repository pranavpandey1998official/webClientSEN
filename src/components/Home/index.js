import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Ahmedabad from '../../assets/location/ahmedabad.svg';
import Bangalore from '../../assets/location/bangalore.svg';
import Chennai from '../../assets/location/chennai.svg';
import Delhi from '../../assets/location/delhi.svg';
import Hyderabad from '../../assets/location/hyderabad.svg';
import Mumbai from '../../assets/location/mumbai.svg';

const images = [
  {
    url: Delhi,
    title: 'Delhi',
    width: '10%',
  },
  {
    url: Ahmedabad,
    title: 'Ahmedabad',
    width: '10%',
  },
  {
	url : Chennai,
	title: 'Chennai',
	width: '10%'
  },
  {
    url: Bangalore,
    title: 'Bangalore',
    width: '10%',
  },
  {
    url: Hyderabad,
    title: 'Hyderabad',
    width: '10%',
  },
  {
    url: Mumbai,
    title: 'Mumbai',
    width: '10%',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
	flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
	position: 'relative',
	flexDirection:'column',
    height: '160px',
    '&:hover, &$focusVisible': {
      zIndex: 1,
	  '& $imageButton': {
        color: theme.palette.common.black
      },
    },
  },

  focusVisible: {},

  imageButton: {
	position:'absolute',
	flexWrap: 'wrap',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
	justifyContent: 'flex-end',
	flexDirection: 'column',
  },

  imageSrc: {
	position:'absolute',
	height: '130px',
    left: 0,
    right: 0,
    top: 0,
	bottom: 0,
	display: 'flex',
	backgroundSize: 'cover',
	backgroundPosition: 'center 40%',
  }
}));

function ImageButton() {
	const classes = useStyles();
	const handleClick = (title) => {
		console.log(title)
	}

	return (
		<div className={classes.root}>
			{images.map(image => (
				<ButtonBase
					disableRipple
					key={image.title}
					className={classes.image}
					onClick={() => handleClick(image.title)}
					focusVisibleClassName={classes.focusVisible}
					style={{width: image.width, margin:'10px'}}
				>
					<span className={classes.imageSrc} style={{backgroundImage: `url(${image.url})`}}/>
					<span className={classes.imageButton}>
						<h1 class="is-size-6"> {image.title}</h1>
					</span>
				</ButtonBase>
			))}
		</div>
	);
};

class Home extends React.Component {
	handleClick(event){
		if(event.keyCode === 13) {
			//handle search query here
			console.log(event.target.value)
		}
	}
	render() {
		return (
			<div className="column is-centered">
				<h1 id="homeTitle" style={{marginBottom:'50px'}}>Where Do You want to Live!</h1>
                <div className="container">
					<div className="column is-centered">
						<div className="columns is-centered" style={{marginBottom:"50px"}}>
							<p class="control has-icons-left" style={{width:"70%"}}>
								<input class="input is-rounded" type="text" placeholder="Search City" onKeyDown={this.handleClick}/>
								<span class="icon is-small is-left">
									<i class="fas fa-search"></i>
								</span>
							</p>
						</div>
						<div className="columns is-centered">
							<h1 class="is-size-4">Popular Cities</h1>
						</div>
						<div class="columns is-centered">
							<ImageButton/>
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default Home;