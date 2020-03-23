import React from "react";
import { useField, Field, Form, withFormik } from "formik";
import Select from "react-select";
import Slider from '@material-ui/core/Slider';

const amenitiesOptions = [
	{ value: "furnished", label: "Furnished" },
	{ value: "hospital", label: "Hospital" },
	{ value: "school", label: "School" },
	{ value: "gym", label: "Gym" },
];

const typeOptions = [
	{ value: "appartment", label: "Appartment" },
	{ value: "bungalow", label: "Bungalow" },
	{ value: "any", label: "Any" },
];

const marks = (min,max) => {
	return [
		{ value: min, label: String(min)},
		{ value: max, label: String(max)},
	];
};

const SliderValues = ( type, name ) => {
	if (type==="single") {
		return {
			defaultValue: 1,
			min: 1,
			max: 5,
			step: 1,
		};
	} else {
		if (name==="price") {
			return {
				defaultValue: [10,1000],
				min: 10,
				max: 1000,
				step: 10,
			};
		} else {
			return {
				defaultValue: [100,5000],
				min: 100,
				max: 5000,
				step: 10,
			};
		}
	}
};

const FormSelect = ({
	field,
	form: { setFieldValue, setFieldTouched },
	...props
}) => (
	<Select
		classNamePrefix="select"
		options={props.options}
		isMulti={props.isMulti}
		isClearable={true}
		isSearchable={true}
		onChange={value => setFieldValue(props.label, value)}
		onBlur={() => setFieldTouched(props.label, true)}
	/>
);

const FormSlider = (props) => {
	const [ field, meta, helpers ] = useField(props.name);

	const [value, setValue] = React.useState(props.values.defaultValue);
	const handleChange = (event, newValue) => {
		setValue(newValue);
		helpers.setValue(newValue);
		helpers.setTouched(true);
	};

	return(
		<Slider
			min={props.values.min}
			max={props.values.max}
			marks={marks(props.values.min,props.values.max)}
			value={value}
			step={props.values.step}
			onChange={handleChange}
			valueLabelDisplay="auto"
			aria-labelledby="range-slider"
		/>
	);
};

class FilterForm extends React.Component {
	render() {
		return (
			<div className="column">
				<div className="container">
					<div className="card">
						<div className="column is-centered">
							<h1 class="is-size-2">
								Filters
							</h1>
							<div className="card-content">
								<div className="content">
									<Form>
										<div class="field">
											<label class="label">Type</label>
											<div class="control" style={{width:"250px"}}>
												<Field 
													class="input"
													name="type"
													label="type"
													isMulti={false}
													component={FormSelect}
													options={typeOptions}
													style={{width:"250px"}}
												/>
											</div>
										</div>
										<div class="field">
											<label class="label">Amenities</label>
											<div class="control" style={{width:"250px"}}>
												<Field 
													class="input"
													name="amenities"
													label="amenities"
													isMulti={true}
													component={FormSelect}
													options={amenitiesOptions}
													style={{width:"250px"}}
												/>
											</div>
										</div>
										<div class="field">
											<label class="label">Price (Lacs INR)</label>
											<div class="control" style={{width:"250px"}}>
												<FormSlider
													name="price"
													label="price"
													type="range"
													style={{width:"250px"}}
													values={SliderValues("range", "price")}
												/>
											</div>
										</div>
										<div class="field">
											<label class="label">Area (Sq. Feet)</label>
											<div class="control" style={{width:"250px"}}>
												<FormSlider
													name="area"
													label="area"
													type="range"
													style={{width:"250px"}}
													values={SliderValues("range", "area")}
												/>
											</div>
										</div>
										<div class="field">
											<label class="label">Bedrooms</label>
											<div class="control" style={{width:"250px"}}>
												<FormSlider
													name="bedroom"
													label="bedroom"
													type="single"
													style={{width:"250px"}}
													values={SliderValues("single", "bedroom")}
												/>
											</div>
										</div>
										<div class="field">
											<label class="label">Bathrooms</label>
											<div class="control" style={{width:"250px"}}>
												<FormSlider
													name="bathroom"
													label="bathroom"
													type="single"
													style={{width:"250px"}}
													values={SliderValues("single", "bathroom")}
												/>
											</div>
										</div>
										<div class="field">
											<label class="label">Balconies</label>
											<div class="control" style={{width:"250px"}}>
												<FormSlider
													name="balcony"
													label="balcony"
													type="single"
													style={{width:"250px"}}
													values={SliderValues("single", "balcony")}
												/>
											</div>
										</div>
										<div class="field">
											<div class="control is-centered">
												<button class="button is-link is-rounded is-centered" type="submit" style={{marginTop:"5%", width:"250px"}}>
													Submit
												</button>
											</div>
										</div>
									</Form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

const Filter = withFormik({
	handleSubmit(values){
		//handle form values here
		console.log(values);
	}
})(FilterForm);

export default Filter;