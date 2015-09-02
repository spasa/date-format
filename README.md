# date-format
In lack of formatting ability of Javascript Date object, this was developed to allow formatting of dates in JavaScript similar to Java's SimpleDateFormat.

The following pattern letters are defined

<table>
  <thead>
    <tr>
      <th>Letter</th>
      <th>Date or Time Component</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>y</td>
      <td>Year</td>
      <td>1986; 86</td>
    </tr>
    <tr>
      <td>M</td>
      <td>Month in year</td>
      <td>July; Jul; 07</td>
    </tr>
    <tr>
      <td>D</td>
      <td>Day in year</td>
      <td>142</td>
    </tr>
    <tr>
      <td>d</td>
      <td>Day in month</td>
      <td>22</td>
    </tr>
    <tr>
      <td>F</td>
      <td>Day of week in month</td>
      <td>2</td>
    </tr>
    <tr>
      <td>E</td>
      <td>Day name in week</td>
      <td>Thursday; Thu</td>
    </tr>
    <tr>
      <td>u</td>
      <td>Day number of week (1 = Monday, ..., 7 = Sunday)</td>
      <td>4</td>
    </tr>
    <tr>
      <td>a</td>
      <td>Am/pm marker</td>
      <td>AM</td>
    </tr>
    <tr>
      <td>H</td>
      <td>Hour in day (0-23)</td>
      <td>0</td>
    </tr>
    <tr>
      <td>k</td>
      <td>Hour in day (1-24)</td>
      <td>24</td>
    </tr>
    <tr>
      <td>K</td>
      <td>Hour in am/pm (0-11)</td>
      <td>0</td>
    </tr>
    <tr>
      <td>h</td>
      <td>Hour in am/pm (1-12)</td>
      <td>12</td>
    </tr>
    <tr>
      <td>m</td>
      <td>Minute in hour</td>
      <td>10</td>
    </tr>
    <tr>
      <td>s</td>
      <td>Second in minute</td>
      <td>55</td>
    </tr>
    <tr>
      <td>S</td>
      <td>Millisecond</td>
      <td>978</td>
    </tr>
  </tbody>
</table>
