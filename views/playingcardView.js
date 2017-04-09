const view = `<table>
  <tbody>
    {% for row in rows %}
    <tr>
      {% for column in row.columns %}
      <td>
        {{ column }}
      </td>
      {% endfor %}
    </tr>
    {% endfor %}
  </tbody>
</table>`;
