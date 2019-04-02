/* - MusixMatch API
Empower your apps with the world’s largest lyrics database with more than 14 million lyrics 
in over 50 distinct languages. https://developer.musixmatch.com/
// Parameters //
    AUTHENTICATION
        apikeyYour personal api key, you must use it in every api call
        OBJECTS
        track_idMusixmatch track id
        artist_idMusixmatch artist id
        album_idMusixmatch album id
        commontrack_idMusixmatch commontrack id
        track_mbidmusicbrainz recording or track id
        artist_mbidmusicbrainz artist id
        album_mbidmusicbrainz release id

    QUERYING
        q_tracksearch for a text string among song titles
        q_artistsearch for a text string among artist names
        q_lyricssearch for a text string among lyrics
        qsearch for a text string among song titles,artist names and lyrics

    FILTERING
        f_has_lyricsFilter by objects with available lyrics
        f_is_instrumentalFilter instrumental songs
        f_has_subtitleFilter by objects with available subtitles
        f_music_genre_idFilter by objects with a specific music category
        f_subtitle_lengthFilter subtitles by a given duration in seconds
        f_subtitle_length_max_deviationApply a deviation to a given subtitle duration (in seconds)
        f_lyrics_languageFilter the tracks by lyrics language
        f_artist_idFilter by objects with a given Musixmatch artist_id
        f_artist_mbidFilter by objects with a given musicbrainz artist id
    GROUPING
        g_commontrackGroup a track result set by commontrack_id
        SORTING
        s_track_ratingSort the results by our popularity index for tracks, possible values are ASC | DESC
        s_track_release_dateSort the results by track release date, possible values are ASC | DESC
        s_artist_ratingSort the results by our popularity index for artists, possible values are ASC | DESC

    RESULT SET PAGINATION
        pageRequest specific result page (default=1)
        page_sizeSpecify number of items per result page (default=10, range is 1 to 100)
        OUTPUT FORMAT
        subtitle_formatDesired output format for the subtitle body. Possible values LRC|DFXP|STLEDU. Default to LRC.
        LOCALIZATION
        countryThe country code of the desired country.

// STATUS CODES //
    STATUS CODES
    200 - The request was successful.
    400 - The request had bad syntax or was inherently impossible to be satisfied.
    401 - Authentication failed, probably because of invalid/missing API key.
    402 - The usage limit has been reached, either you exceeded per day requests limits or your balance is insufficient.
    403 - You are not authorized to perform this operation.
    404 - The requested resource was not found.
    405 - The requested method was not found.
    500 - Ops. Something were wrong.
    503 - Our system is a bit busy at the moment and your request can’t be satisfied.

// MUSIC METADATA //
    TRACK
        Inside the track object you can get the following extra information:
        Track Rating
            The track rating is a score 0-100 identifying how popular is a song in musixmatch.
            You can use this information to sort search results, like the most popular songs of an artist, of a music genre, of a lyrics language.
            Instrumental and Explicit flags
            The instrumental flag identifies songs with music only, no lyrics.
            The explicit flag identifies songs with explicit lyrics or explicit title. We're able to identify explicit words and set the flag for the most common languages.
        Favourites
            How many users have this song in their list of favourites.
            Can be used to sort tracks by num favourite to identify more popular tracks within a set.
        Music Genre
            The music genere of the song.
            Can be used to group songs by genre, as input for similarity alghorithms, artist genre identification, navigate songs by genere, etc.
        Song titles translations
            The track title, as translated in different lanauages, can be used to display the right writing for a given user, example:
            LIES (Bigbang) becomes 在光化門 in chinese
            HALLELUJAH (Bigbang) becomes ハレルヤ in japanese
        Understanding Track Id's
            Every track has two distinct Id's
            track_id: identifies a track within an album. The same song of the same artist may appear in a Single Album or Ep, then in the official Album, then in a "Live concert". All this tracks will have distinct Id's so you can build the Artist->Album->Tracks relation
            commontrack_id: to link a track to its lyrics, syncs and music publishing information we group many track Id's into a single commontrack_id. Tracks with same commontrack_id will share the same lyrics.
        Artist
            Inside the artist object you can get the following nice extra information:
            Comments and country
            An artist comment is a short snippet of text which can be mainly used for disambiguation.
            The artist country is the born country of the artist/group
            There are two perfect search result if you search by artist with the keyword "U2". Indeed there are two distinct music groups with this same name, one is the most known irish group of Bono Vox, the other is a less popular (world wide speaking) group from Japan.
            Here's how you can made use of the artist comment in your search result page:
                U2 (Irish rock band)
                U2 (あきやまうに)
            You can also show the artist country for even better disambiguation:
                U2 (Irish rock band) from Ireland
                U2 (あきやまうに) from Japan
            Artist translations
                When you create a world wide music related service you have to take into consideration to display the artist name in the user's local language. These translation are also used as aliases to improve the search results.
            Let's use PSY for this example.
                Western people know him as PSY but korean want to see the original name 싸이.
                Using the name translations provided by our api you can show to every user the writing they expect to see.
                Furthermore, when you search for "psy gangnam style" or "싸이 gangnam style" with our search/match api you will still be able to find the song.
        Artist rating
            The artist rating is a score 0-100 identifying how popular is an artist in musixmatch.
            You can use this information to build charts, for suggestions, to sort search results. In the example above about U2, we use the artist rating to show the irish band before the japanese one in our serp.
        Artist music genre
            We provide one or more main artist genre, this information can be used to calculate similar artist, suggestions, or the filter a search by artist genre.
        Album
            Inside the album object you can get the following nice extra information:
        Album Rating
            The album rating is a score 0-100 identifying how popular is an album in musixmatch.
            You can use this information to sort search results, like the most popular albums of an artist.
        Album copyright and label
            For most of our albums we can provide extra information like for example:
            Label: Universal-Island Records Ltd.
            Copyright: (P) 2013 Rubyworks, under license to Columbia Records, a Division of Sony Music Entertainment.
        Album type and release date
            The album official release date can be used to sort an artist's albums view starting by the most recent one.
            Album can also be filtered or grouped by type: Single, Album, Compilation, Remix, Live. This can help to build an artist page with a more organized structure.
        Album music genre
            For most of the albums we provide two groups of music genres. Primary and secondary. This information can be used to help user navigate albums by genre.
        An example could be:
        Primary genere: POP
        Secondary genre: K-POP or Mandopop

// GO-LIVE CHECK-LIST //
Before your product goes live, please take 5 minutes to read this checklist and make sure that you’ve got everything covered.

    *Read the API Terms of Services to be sure your application complies. Not sure about something? Write us at: support@musixmatch.com
    *Check your API calls limits, do they fit the expected traffic?
    *Our lyrics are UTF-8 encoded. Are you handling the encoding correctly?
    *Make sure you have correctly implemented:
        *whenever you display lyrics in a page, show also the value of lyrics_copyright you received from track.lyrics.get
        *the lyrics tracking script to count the lyrics visualizations (track.lyrics.get). To check this, login into the admin panel, check the stats page under the voice “lyrics visualization credits”. If it shows some numbers, it works!
    *Don't forget to add the "powered by" image provided by Musixmatch and have it linked to www.musixmatch.com
// BEST PRACTICES //
    Here are some typical functions to implement:

    Get most popular lyrics and artists with: 
        track.chart.get, artist.chart.get
    Let users search directly for their favorite lyrics with: 
        track.search, artist.search
    Simply get lyrics with: 
        track.lyrics.get
    Allow us to collect user’s feedback with: 
        track.lyrics.feedback.post
    Get info about an album with: 
        album.get
        
    If you have your own music catalog, you’ll need to:

    Match your song against our database with: 
            matcher.track.get
    Then get lyrics with: 
        track.lyrics.get
    Allow us to collect user’s feedback with: 
        track.lyrics.feedback.post
    
    Are you designing a mobile app? These are some useful calls:
    
    Get most popular lyrics and artists with: 
        track.chart.get, artist.chart.get
    Simply get lyrics with: 
        track.lyrics.get
    Allow us to collect user’s feedback with: 
        track.lyrics.feedback.post
    Let users search directly for their favorite lyrics with: 
        track.search, artist.search
    Match your users’ library against our database with: 
        matcher.track.get

*/

var mmKey = "apikey=6ed799e467f870e183ad01dc0b02fb7a/";
var mmBaseURL = "http://tracking.musixmatch.com/t1.0/a1b2c3d4e5f6g7/";
var mmTrackingURL = "tracking.url.get?domain=<PUT WEBSITE_DOMAIN HERE>";
var artistNameConstructor = "?artist_name=" +
var artistVariable = $('<input>').onClick(event).val().trim();

var queryURL = mmBaseURL + artistNameConstructor + artistValue

$.ajax({
    url: queryURL,
    method: get,
    

}.then() {

}