import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
//import ListSubheader from '@mui/material/ListSubheader';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function GroupedSelect() {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel htmlFor="grouped-native-select">Month</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          label="Grouping"
        >
          <option aria-label="None" value="" />
          <option value={1}>January</option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: 100 }}>
        <InputLabel htmlFor="grouped-select">Day</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={23}>23</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={26}>26</MenuItem>
          <MenuItem value={27}>27</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={29}>29</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={31}>31</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: 100 }}>
        <InputLabel htmlFor="grouped-select">Year</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          <MenuItem value={1}>2023</MenuItem>
          <MenuItem value={2}>2022</MenuItem>
          <MenuItem value={3}>2021</MenuItem>
          <MenuItem value={4}>2020</MenuItem>
          <MenuItem value={5}>2019</MenuItem>
          <MenuItem value={6}>2018</MenuItem>
          <MenuItem value={7}>2017</MenuItem>
          <MenuItem value={8}>2016</MenuItem>
          <MenuItem value={9}>2015</MenuItem>
          <MenuItem value={10}>2014</MenuItem>
          <MenuItem value={11}>2013</MenuItem>
          <MenuItem value={12}>2012</MenuItem>
          <MenuItem value={13}>2011</MenuItem>
          <MenuItem value={14}>2010</MenuItem>
          <MenuItem value={15}>2009</MenuItem>
          <MenuItem value={16}>2008</MenuItem>
          <MenuItem value={17}>2007</MenuItem>
          <MenuItem value={18}>2006</MenuItem>
          <MenuItem value={19}>2005</MenuItem>
          <MenuItem value={20}>2004</MenuItem>
          <MenuItem value={21}>2003</MenuItem>
          <MenuItem value={22}>2002</MenuItem>
          <MenuItem value={23}>2001</MenuItem>
          <MenuItem value={24}>2000</MenuItem>
          <MenuItem value={25}>1999</MenuItem>
          <MenuItem value={26}>1998</MenuItem>
          <MenuItem value={27}>1997</MenuItem>
          <MenuItem value={28}>1996</MenuItem>
          <MenuItem value={29}>1995</MenuItem>
          <MenuItem value={30}>1994</MenuItem>
          <MenuItem value={31}>1993</MenuItem>
          <MenuItem value={32}>1992</MenuItem>
          <MenuItem value={33}>1991</MenuItem>
          <MenuItem value={34}>1990</MenuItem>
          <MenuItem value={35}>1989</MenuItem>
          <MenuItem value={36}>1988</MenuItem>
          <MenuItem value={37}>1987</MenuItem>
          <MenuItem value={38}>1986</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
