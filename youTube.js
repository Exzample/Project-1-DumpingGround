/*
// YOUTUBE DATA API //

// HTTP REQUEST PARAMETERS //
    part	
    <TYPE = STRING> The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.

// FILTERS (specify 0 or 1 of the following parameters)
    forContentOwner
    <TYPE = BOOLEAN> This parameter can only be used in a properly authorized request, and it is intended exclusively for YouTube content partners.

    The forContentOwner parameter restricts the search to only retrieve videos owned by the content owner identified by the onBehalfOfContentOwner parameter. If forContentOwner is set to true, the request must also meet these requirements:
        *The onBehalfOfContentOwner parameter is required.
        *The user authorizing the request must be using an account linked to the specified content owner.
        *The type parameter value must be set to video.
        *None of the following other parameters can be set: videoDefinition, videoDimension, videoDuration,     *videoLicense, videoEmbeddable, videoSyndicated, videoType.

    forDeveloper
    <TYPE = BOOLEAN> This parameter can only be used in a properly authorized request. The forDeveloper parameter restricts the search to only retrieve videos uploaded via the developer's application or website. The API server uses the request's authorization credentials to identify the developer. The forDeveloper parameter can be used in conjunction with optional search parameters like the q parameter.

    For this feature, each uploaded video is automatically tagged with the project number that is associated with the developer's application in the Google Developers Console.

    When a search request subsequently sets the forDeveloper parameter to true, the API server uses the request's authorization credentials to identify the developer. Therefore, a developer can restrict results to videos uploaded through the developer's own app or website but not to videos uploaded through other apps or sites.

    forMine
    <TYPE = BOOLEAN> This parameter can only be used in a properly authorized request. The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type parameter's value must also be set to video. In addition, none of the following other parameters can be set in the same request: videoDefinition, videoDimension, videoDuration, videoLicense, videoEmbeddable, videoSyndicated, videoType.

    relatedToVideoId
    <TYPE = string>
    The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video.

    Note that if the relatedToVideoId parameter is set, the only other supported parameters are part, maxResults, pageToken, regionCode, relevanceLanguage, safeSearch, type (which must be set to video), and fields.
// OPTIONAL PARAMETERS //
    https://developers.google.com/youtube/v3/docs/search/list 

// REQUEST BODY //
    Do not provide a request body when calling this method.

// RESPONSE //
    If successful, this method returns a response body with the following structure:
    {
        "kind": "youtube#searchListResponse",
        "etag": etag,
        "nextPageToken": string,
        "prevPageToken": string,
        "regionCode": string,
        "pageInfo": {
            "totalResults": integer,
            "resultsPerPage": integer
        },
        "items": [
            search Resource
        ]
    }

// PROPERTIES //
    https://developers.google.com/youtube/v3/docs/search/list#properties 

// EXAMPLES //
     this code sample calls the API's search.list method to retrieve searcy results associated with a particular keyword. The HTML page uses jQuery, along with the auth.js and search.js Javascript files, to show a simple search form and display the list of the search results. 

     // After the API loads, call a function to enable the search box.
    function handleAPILoaded() {
        $('#search-button').attr('disabled', false);
        }

    // Search for a specified string.
    function search() {
        var q = $('#query').val();
        var request = gapi.client.youtube.search.list({
            q: q,
            part: 'snippet'
        });

    request.execute(function(response) {
        var str = JSON.stringify(response.result);
        $('#search-container').html('<pre>' + str + '</pre>');
        });
    }

    // Videos:list //
    Returns a list of videos that match the API request parameters.

    LIST (BY VIDEO ID)
    This example retrieves information about a specific video. It uses the id parameter to identify the video.
    
    // Sample js code for videos.list
    // See full sample for buildApiRequest() code, which is not
    // specific to a particular API or API method.

        buildApiRequest('GET',
                        '/youtube/v3/videos',
                        {'id': 'Ks-_Mh1QhMc',
                        'part': 'snippet,contentDetails,statistics'});
        
    LIST (BY MULTIPLE VIDEO IDs)
    This example retrieves information about a group of videos. The id parameter value is a comma-separated list of YouTube video IDs. You might issue a request like this to retrieve additional information about the items in a playlist or the results of a search query.

        buildApiRequest('GET',
                    '/youtube/v3/videos',
                    {'id': 'Ks-_Mh1QhMc,c0KYU2j0TM4,eIho2S0ZahI',
                    'part': 'snippet,contentDetails,statistics'});



// ERRORS //
    https://developers.google.com/youtube/v3/docs/search/list#errors

*/

ytURL = "GET https://www.googleapis.com/youtube/v3/searchq=michael+jackson";


buildApiRequest('GET',
    '/youtube/v3/search',
    {
        'maxResults': '25',
        'part': 'snippet',
        'q': 'surfing',
        'type': ''
    });