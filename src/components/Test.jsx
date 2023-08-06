import { useState, useEffect } from "react";
import { OverlayTrigger, Tooltip, Spinner } from "react-bootstrap";

function Test() {
	const [name, setName] = useState("");
	const [aboutMe, setAboutMe] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000); // Simulating 2 seconds of loading time
	}, []);

	const [workData, setworkData] = useState({
		position: "",
		companyName: "",
		firstDay: "",
		lastDay: "",
		jobDesc: "",
	});
	const [submittedWork, setSubmittedWork] = useState([]);

	const handleWorkInputChange = (e) => {
		const { name, value } = e.target;
		setworkData({ ...workData, [name]: value });
	};
	const handleJobSubmit = (e) => {
		e.preventDefault();
		setSubmittedWork([...submittedWork, workData]);
		setworkData({
			position: "",
			companyName: "",
			firstDay: "",
			lastDay: "",
			jobDesc: "",
		});
	};
	const handleWorkRemove = (index) => {
		const updatedData = [...submittedWork];
		updatedData.splice(index, 1);
		setSubmittedWork(updatedData);
	};

	function handleNameChange(e) {
		setName(e.target.value);
	}
	function handleAboutMeChange(e) {
		setAboutMe(e.target.value);
	}
	function handlePhoneChange(e) {
		const inputPhoneNumber = e.target.value;
		const onlyNumbers = inputPhoneNumber.replace(/\D/g, ""); // Remove all non-numeric characters
		setPhone(onlyNumbers);
	}
	function handleEmailChange(e) {
		setEmail(e.target.value);
	}

	const [eduData, setEduData] = useState({
		degree: "",
		school: "",
		firstDaySch: "",
		lastDaySch: "",
	});
	const [submittedEdu, setSubmittedEdu] = useState([]);
	const handleEduInputChange = (e) => {
		const { name, value } = e.target;
		setEduData({ ...eduData, [name]: value });
	};

	const handleEduSubmit = (e) => {
		e.preventDefault();
		setSubmittedEdu([...submittedEdu, eduData]);
		setEduData({
			degree: "",
			school: "",
			firstDaySch: "",
			lastDaySch: "",
		});
	};

	const handleEduRemove = (index) => {
		const updatedData = [...submittedEdu];
		updatedData.splice(index, 1);
		setSubmittedEdu(updatedData);
	};

	const defaultAboutMe =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus nibh quis imperdiet eleifend. Phasellus ante nulla, fringilla nec risus quis, suscipit lacinia justo. Integer dapibus sollicitudin laoreet. Vestibulum pharetra nisl eget vulputate vestibulum. Aliquam in nisl sit amet ipsum ultricies vestibulum sed sit amet nunc. Suspendisse lobortis fermentum lacus, vitae convallis turpis ultrices laoreet. Vivamus turpis est, eleifend vel magna id, sagittis tempus orci. Aliquam nec lectus augue. Suspendisse sed auctor arcu, mattis placerat tortor. In euismod sapien interdum turpis cursus pharetra.";
	const defaultPhone = "+65 91234567";
	const defaultEmail = "me@email.com";

	const isFormValid =
		workData.position.trim() !== "" &&
		workData.companyName.trim() !== "" &&
		workData.firstDay.trim() !== "" &&
		workData.lastDay.trim() !== "";

	const isFormValidEdu =
		eduData.degree.trim() !== "" &&
		eduData.school.trim() !== "" &&
		eduData.firstDaySch.trim() !== "" &&
		eduData.lastDaySch.trim() !== "";

	const isButtonDisabled = submittedWork.length >= 4;
	const isButtonDisabledEdu = submittedEdu.length >= 4;

	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const formatDate = (inputDate) => {
		const [year, month] = inputDate.split("-");
		return `${monthNames[parseInt(month) - 1]} ${year}`;
	};
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1; // Months are zero-based, so add 1
	const formattedDate = `${year}-${month.toString().padStart(2, "0")}`;
	return (
		<div>
			{/* Your content goes here */}
			{isLoading ? (
				<div className="centered-container">
					<Spinner animation="grow" role="status">
						{/* <span className="sr-only">Loading...</span> */}
					</Spinner>
				</div>
			) : (
				<>
					<header className="header">CV</header>
					<div className="main-container ">
						<div className="container">
							<div className="grid-container">
								<div className="column-1">
									<h5 className="personal-info">Personal Information</h5>
									<form onSubmit={(e) => e.preventDefault()}>
										<input
											type="text"
											className="form-control"
											id="exampleFormControlInput1"
											placeholder="name"
											value={name}
											onChange={handleNameChange}
										/>

										<div className="mb-3 info-about">
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												rows="3"
												placeholder="Enter About yourself"
												value={aboutMe}
												onChange={handleAboutMeChange}
											></textarea>
										</div>
									</form>
									<h5 className="personal-info">Contact Information</h5>
									<input
										type="text"
										className="form-control"
										id="exampleFormControlInput1"
										placeholder="Phone Number"
										value={phone}
										onChange={handlePhoneChange}
									/>

									<div className="mb-3 info-about">
										<input
											type="text"
											className="form-control"
											id="exampleFormControlInput1"
											placeholder="Email Address"
											value={email}
											onChange={handleEmailChange}
										/>
									</div>
									<h5 className="personal-info">Work Experience</h5>
									<form onSubmit={handleJobSubmit}>
										<div className="mb-3">
											<input
												type="text"
												className="form-control"
												id="exampleFormControlInput1"
												placeholder="Position"
												name="position"
												value={workData.position}
												onChange={handleWorkInputChange}
											/>
										</div>
										<div className="mb-3">
											<input
												type="text"
												className="form-control"
												id="exampleFormControlInput1"
												placeholder="Company Name"
												name="companyName"
												value={workData.companyName}
												onChange={handleWorkInputChange}
											/>
										</div>
										<div className="mb-3">
											<input
												type="month"
												className="form-control"
												id="datePicker"
												name="firstDay"
												value={workData.firstDay}
												onChange={handleWorkInputChange}
												max={formattedDate}
											></input>
										</div>
										<div className="mb-3">
											<input
												type="month"
												className="form-control"
												id="datePicker"
												name="lastDay"
												value={workData.lastDay}
												onChange={handleWorkInputChange}
												max={formattedDate}
											></input>
										</div>
										<div className="mb-3">
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												rows="3"
												placeholder="Job Desciption"
												name="jobDesc"
												value={workData.jobDesc}
												onChange={handleWorkInputChange}
											></textarea>
										</div>

										<div className="mb-3 d-flex justify-content-end">
											<OverlayTrigger
												placement="top"
												overlay={
													isButtonDisabled ? (
														<Tooltip>
															Cannot add more than 4 work experiences
														</Tooltip>
													) : (
														<></>
													)
												}
											>
												<span>
													<button
														type="submit"
														className="btn btn-primary btn-sm"
														disabled={!isFormValid || isButtonDisabled}
													>
														Add Work
													</button>
												</span>
											</OverlayTrigger>
										</div>
									</form>

									<h5 className="education-info">Education</h5>
									<form onSubmit={handleEduSubmit}>
										<div className="mb-3">
											<input
												type="text"
												className="form-control"
												id="exampleFormControlInput1"
												placeholder="Degree / Field of Studies"
												name="degree"
												value={eduData.degree}
												onChange={handleEduInputChange}
											/>
										</div>
										<div className="mb-3">
											<input
												type="text"
												className="form-control"
												id="exampleFormControlInput1"
												placeholder="School or University"
												name="school"
												value={eduData.school}
												onChange={handleEduInputChange}
											/>
										</div>
										<div className="mb-3">
											<input
												type="month"
												className="form-control"
												id="datePicker"
												name="firstDaySch"
												value={eduData.firstDaySch}
												onChange={handleEduInputChange}
												max={formattedDate}
											/>
										</div>
										<div className="mb-3">
											<input
												type="month"
												className="form-control"
												id="datePicker"
												name="lastDaySch"
												value={eduData.lastDaySch}
												onChange={handleEduInputChange}
												max={formattedDate}
											/>
										</div>
										<div className="mb-3 d-flex justify-content-end">
											<OverlayTrigger
												placement="top"
												overlay={
													isButtonDisabledEdu ? (
														<Tooltip>Cannot add more than 4 Education</Tooltip>
													) : (
														<></>
													)
												}
											>
												<span>
													<button
														type="submit"
														className="btn btn-primary btn-sm"
														disabled={!isFormValidEdu || isButtonDisabledEdu}
													>
														Add Education
													</button>
												</span>
											</OverlayTrigger>
										</div>
									</form>
								</div>
								<div className="column-2">
									<div className="heading-name">{name ? name : "John Doe"}</div>
									<div className="info-contact">
										<div className="info-contact-col-1">
											Phone: {phone ? phone : defaultPhone}
										</div>
										<div className="info-contact-col-2">
											Email: {email ? email : defaultEmail}
										</div>
									</div>

									<hr className="hr"></hr>
									<div className="heading-About">About me</div>
									<div className="about-us-description">
										{aboutMe ? aboutMe : defaultAboutMe}
									</div>
									<div className="heading-work">Work Experience</div>
									<ul className="list-unstyled">
										{submittedWork.map((data, index) => (
											<li key={index} className="d-grid gap-2 d-md-block">
												<div className="row">
													<div className="col-md-4">
														<b>{data.position}</b>
													</div>
													<div className="col-md-5">
														{formatDate(data.firstDay)} -{" "}
														{formatDate(data.lastDay)}
													</div>
													<div className="col-md-3 d-flex justify-content-end">
														<button
															type="button"
															className="btn-remove"
															onClick={() => handleWorkRemove(index)}
														>
															x
														</button>
													</div>
												</div>
												<div className="row">
													<div className="col-md-12">{data.companyName}</div>
												</div>

												<div className="row">
													<div className="col-md-12">{data.jobDesc}</div>
												</div>
											</li>
										))}
									</ul>
									<div className="heading-edu" style={{ paddingTop: "20px" }}>
										Education
									</div>
									<ul className="list-unstyled">
										{submittedEdu.map((data, index) => (
											<li key={index} className="d-grid gap-2 d-md-block">
												<div className="row">
													<div className="col-md-4">
														<b>{data.degree}</b>
													</div>
													<div className="col-md-5">
														{formatDate(data.firstDaySch)} -{" "}
														{formatDate(data.lastDaySch)}
													</div>
													<div className="col-md-3 d-flex justify-content-end">
														<button
															type="button"
															className="btn-remove"
															onClick={() => handleEduRemove(index)}
														>
															x
														</button>
													</div>
												</div>
												<div className="row">
													<div className="col-md-12">{data.school}</div>
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<footer>Cornelia 2023</footer>
				</>
				//end
			)}
		</div>
	);
}

export default Test;
