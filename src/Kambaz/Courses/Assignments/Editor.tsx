export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input placeholder="Assignment Name" id="wd-name" value="A1 - ENV + HTML" />
            <br /> <br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br /> <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td valign="top">
                        <input type="number" id="points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td valign="top">
                        <select id="wd-display-grade-as">
                            <option selected value="PERCENTAGE">Percentage</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td valign="top">
                        <select id="wd-submission-type">
                            <option selected value="ONLINE">Online</option>

                        </select>
                        <br /><br />
                        Online Entry Options
                        <br />
                        <input type="checkbox" name="check-submission-type" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label>
                        <br />
                        <input type="checkbox" name="check-submission-type" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label>
                        <br />
                        <input type="checkbox" name="check-submission-type" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label>
                        <br />
                        <input type="checkbox" name="check-submission-type" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label>
                        <br />
                        <input type="checkbox" name="check-submission-type" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Upload</label>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label>Assign</label>
                    </td>
                    <td valign="top">
                        <table>
                            <tr>
                                <td valign="top">
                                    <label htmlFor="wd-assign-to">Assign To</label>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top">
                                    <input type="text" id="wd-assign-to" value="Everyone" />
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td valign="top">
                                    <label htmlFor="wd-due-date">Due</label>
                                </td>
                            </tr>
                            <tr>
                                <input type="date" id="wd-due-date" value="2024-05-13" />
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <label htmlFor="wd-available-from">Available From</label>
                                </td>
                                <td>
                                    <label htmlFor="wd-available-until">Until</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="date" id="wd-available-from" value="2024-05-06" />
                                </td>
                                <td>
                                    <input type="date" id="wd-available-until" value="2024-05-20" />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <hr />
            <table>
                <tr>
                    <td colSpan={3}>

                    </td>
                    <td colSpan={3}>

                    </td>
                    <td align="right" valign="top" colSpan={3}>
                        <button>Cancel</button><button>Save</button>
                    </td>
                </tr>
            </table>
        </div>


    );
}