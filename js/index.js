
function showTopicDetails(statsFrame, topicFrame)
{
	document.querySelector("#" + statsFrame).classList.add("hidden");
	document.querySelector("#" + topicFrame).classList.remove("hidden");
}

function returnToPartyStats(statsFrame, topicFrame)
{
	document.querySelector("#" + statsFrame).classList.remove("hidden");
	document.querySelector("#" + topicFrame).classList.add("hidden");
}